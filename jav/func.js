const chc = document.querySelector('#container')
const Input_name = document.getElementById('name')
const Input_hometown = document.getElementById('hometown')
const Input_label = document.getElementById('label')
const Input_album = document.getElementById('album')
const Input_status = document.getElementById('status')


let dataList = [
  {
    id:1,
    name:'sample',
    Home_Town:'sample',
    label:'sample',
    album:'sample',
    status:'sample'
  },
]


const localData = localStorage.getItem('dataList')

const handleAdd = () => {

  console.log("saved")

  const newData = {
    id: Math.random(),
    name: Input_name.value,
    Home_Town: Input_hometown.value,
    label: Input_label.value,
    album: Input_album.value,
    status: Input_status.value
    
  }

  dataList = [newData, ...dataList]

  container.innerHTML = ''
  dataList.map(item => {
    console.log(item)
    return (
      container.innerHTML += `
              <div id=${item.id} class="Container" style="display:inline-block; text-align:center; border: 1px solid black; width: 300px; height: 300px; margin:5px; padding:1%;background-color: #f778348c; border-radius: 10px;">
                  <h1 >${item.name}</h1>
                  <p>
                      ${item.Home_Town}
                  </p>
                  <p>
                      ${item.label}
                  </p>
                  <p>
                      ${item.album}
                  </p>
                  <p>
                      ${item.status}
                  </p>
                  <button onclick='handleEdit(${item.id})' style="background-color:  #F7CC34;border-radius: 1px  padding:1%;">Edit</button>
                  <button onclick='handleRemove(${item.id})' style="background-color:  #F7CC34;border-radius: 1px;  padding:1%;">Remove</button>
              </div>
              </div>`
    )
  })

}

const btnAdd = document.getElementById('submit')

btnAdd.addEventListener('click', handleAdd)


const handleRemove = (id) => {
  const filteredItems = dataList.filter(item => item.id !== id)
  dataList = filteredItems
  console.log('trigger')
  container.innerHTML = ''
  dataList.map(item => {
    console.log(item)
    return (
      container.innerHTML += `
              <div id=${item.id} class="Container" style="display:inline-block; text-align:center; border: 1px solid black; width: 300px; height: 300px; margin:5px; padding:1%;background-color: #f778348c; border-radius: 10px;">
                  <h1 >${item.name}</h1>
                  <p>
                      ${item.Home_Town}
                  </p>
                  <p>
                      ${item.label}
                  </p>
                  <p>
                      ${item.album}
                  </p>
                  <p>
                      ${item.status}
                  </p>
                  <button onclick='handleEdit(${item.id})' style="background-color:  #F7CC34;border-radius: 1px  padding:1%;">Edit</button>
                  <button onclick='handleRemove(${item.id})' style="background-color:  #F7CC34;border-radius: 1px;  padding:1%;">Remove</button>
              </div>
              </div>`
    )
  })
}

dataList.map(item => {
  console.log(item)
  return (
    container.innerHTML += `
            <div id=${item.id} class="Container" style="display:inline-block; text-align:center; border: 1px solid black; width: 300px; height: 300px; margin:5px; padding:1%;background-color: #f778348c; border-radius: 10px;">
                <h1 >${item.name}</h1>
                <p>
                    ${item.Home_Town}
                </p>
                <p>
                    ${item.label}
                </p>
                <p>
                    ${item.album}
                </p>
                <p>
                    ${item.status}
                </p>
                <button onclick='handleEdit(${item.id})' style="background-color:  #F7CC34;border-radius: 1px  padding:1%;">Edit</button>
                <button onclick='handleRemove(${item.id})' style="background-color:  #F7CC34;border-radius: 1px;  padding:1%;">Remove</button>
            </div>
            </div>`
  )
})

