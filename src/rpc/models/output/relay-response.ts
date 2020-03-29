/**
 *
 *
 * @class RelayResponse
 */
export class RelayResponse {
  /**
   *
   * Creates a RelayResponse object using a JSON string
   * @param {String} json - JSON string.
   * @returns {RelayResponse} - RelayResponse object.
   * @memberof RelayResponse
   */
  public static fromJSON(json: string): RelayResponse {
    try {
      const jsonObject = JSON.parse(json)
  
      return new RelayResponse(
        jsonObject.signature,
        jsonObject.payload
      )
    } catch (error) {
      throw error
    }
  }

  public readonly signature: string
  public readonly payload: string

  /**
   * Relay Response.
   * @constructor
   * @param {string} signature - Signature.
   * @param {string} payload - Payload string.
   */
  constructor(signature: string, payload: string) {
    this.signature = signature
    this.payload = payload

    if (!this.isValid()) {
      throw new TypeError("Invalid RelayResponse properties.")
    }
  }
  /**
   *
   * Creates a JSON object with the RelayResponse properties
   * @returns {JSON} - JSON Object.
   * @memberof RelayResponse
   */
  public toJSON() {
    return {
      payload: this.payload,
      signature: this.signature
    }
  }
  /**
   *
   * Check if the RelayResponse object is valid
   * @returns {boolean} - True or false.
   * @memberof RelayResponse
   */
  public isValid(): boolean {
    return (
      this.signature.length !== 0 &&
      this.payload.length !== 0
    )
  }
}
