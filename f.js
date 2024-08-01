function convertToCSV(data) {

  const header = Object.keys(data[0]).join(",");

  const rows = data.map(obj => Object.values(obj).map(value => `"${value}"`).join(","));

  return [header, ...rows].join("\n");

}

const items = document.querySelectorAll('.item_info');

const data = [];

items.forEach(item => {

  const bookName = item.querySelector('.gd_name') ? item.querySelector('.gd_name').innerText.trim() : '';

  const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.innerText.trim());

  if (!bookName) return;

  const dataObject = { bookName };

  tags.forEach((tag, index) => {

      dataObject[`tag${index + 1}`] = tag;

  });

  

  data.push(dataObject);

});

const csv = convertToCSV(data);

const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

const link = document.createElement("a");

const csvUrl = URL.createObjectURL(blob);

link.setAttribute("href", csvUrl);

link.setAttribute("download", "베스트셀러_추출.csv");

link.style.visibility = 'hidden';

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

