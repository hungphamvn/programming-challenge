export interface ReportData {
    ALPHABETICAL_STRINGS: number,
    REAL_NUMBERS: number,
    INTEGERS: number,
    ALPHANUMERICS: number
}

export interface DataModel {
    download_link: string,
    report_statistics: ReportData
}

export interface StateDataModel {
    data?: DataModel,
    isLoading: boolean,
    message?: string
}