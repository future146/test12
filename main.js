

document.addEventListener("DOMContentLoaded", function () {
    function calculateTotalHours(tableIndex, totalElementId) {
        let tables = document.querySelectorAll("table");
        let total = 0;
  
        if (tables.length > tableIndex) {
            let rows = tables[tableIndex].querySelectorAll("tbody tr");
            rows.forEach(row => {
                let cells = row.querySelectorAll("td");
                if (cells.length > 2) {
                    let hours = parseInt(cells[2].textContent.trim(), 10);
                    if (!isNaN(hours)) {
                        total += hours;
                    }
                }
            });
        }
  
        document.getElementById(totalElementId).textContent = total;
    }
  
    calculateTotalHours(0, "total-sem1"); // مجموع ساعات الفصل الأول
    calculateTotalHours(1, "total-sem2"); // مجموع ساعات الفصل الثاني
  });
  