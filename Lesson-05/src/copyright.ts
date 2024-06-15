const year = document.getElementById("year") as HTMLSpanElement

let thisYear = new Date().getFullYear().toString() as string

if (year) {
    year.setAttribute("datetime", thisYear)
    year.textContent = thisYear
}


