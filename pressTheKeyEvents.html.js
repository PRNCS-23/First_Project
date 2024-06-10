const insert = document.querySelector('.Box')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>KeyName</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

    `
})