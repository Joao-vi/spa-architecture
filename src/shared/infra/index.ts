import { CompressorJsAdapter } from './compress-image/compressor-js'
import { HttpAxiosClient } from './http/http-axios.client'
import { ConsoleLogAdapter } from './logger/console-log-adapter'
import { LocalStorageAdapter } from './storage/local-storage-adapter'

const httpClient = new HttpAxiosClient()
const localStorage = new LocalStorageAdapter()
const logger = new ConsoleLogAdapter()
const compressImage = new CompressorJsAdapter()

export { httpClient, localStorage, logger, compressImage }
export { reduxStore, useAppDispatch, useAppSelector } from './store/redux-store'
export { generateId } from './unique-identifier/uuid'
