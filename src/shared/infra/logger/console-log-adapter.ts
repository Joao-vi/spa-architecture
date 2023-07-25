interface ILogger {
  debug(message: string): void
  error(message: string, error: Error): void
}

export class ConsoleLogAdapter implements ILogger {
  /**
   * To debug process, log messages using this will not be show in production!!
   *
   */

  debug(message: string): void {
    // check env

    console.log(message)
  }

  /**
   * Report the error to an third-part service
   *
   * @param message Description of the error
   * @param error The instance of Error Object
   */

  error(message: string, error: Error): void {
    // Send the error message to a Sentry

    console.error(message, { error })
  }
}
