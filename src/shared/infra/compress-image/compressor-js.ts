import Compressor from 'compressorjs'
import { Either, Result } from '../../core/result'

type Options = {
  maxWidth?: number
  maxHeight?: number
}

type TResult = Either<File | Blob, Error>

export class CompressorJsAdapter {
  async exec(file: File | Blob, options?: Options): Promise<TResult> {
    try {
      const compressedFile = (await new Promise((resolve, reject) => {
        new Compressor(file, {
          ...options,
          success: resolve,
          error: reject,
        })
      })) as any

      return Result.success(compressedFile)
    } catch (e) {
      return Result.error(e)
    }
  }
}
