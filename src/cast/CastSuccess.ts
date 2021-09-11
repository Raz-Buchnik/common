export class CastSuccess {
  OK = true
  data?: {}

  constructor(data?: {}) {
    if (data) {
      this.data = data
    }
  }
}
