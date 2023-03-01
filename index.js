document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#form')
  const nameInput = document.querySelector('#name')
  const list = document.querySelector('#list')
  const data = []
  // READ
  function lerLista(){
    list.innerHTML = ''
      data.forEach((item, i) => {
        const li = document.createElement('li')
        const nomeSpan = document.createElement('span')
        const editar = document.createElement('button')
        const excluir = document.createElement('button')

        nomeSpan.textContent = item.name
        editar.textContent = 'Editar'
        excluir.textContent = 'Excluir'
        // UPDATE
        editar.addEventListener('click', function(){
          const nomeAtualizado = prompt('Informe o novo nome:')
          if (nomeAtualizado !== null && nomeAtualizado !== '') {
            item.name = nomeAtualizado
            lerLista()
          }
        })
        // DELETE
        excluir.addEventListener('click', function(){
          const confirmacao = confirm('Deseja excluir funcionário?')
          if (confirmacao) {
            data.splice(i, 1)
            lerLista()
          }
        })
        li.appendChild(nomeSpan)
        li.appendChild(editar)
        li.appendChild(excluir)
        list.appendChild(li)
      })
    }
    // CREATE
    function addNome(name){
      const novoNome = {
       id: data.length + 1,
       name,
      }
      data.push(novoNome)
      lerLista()
    }
    form.addEventListener('submit', function(event){
      event.preventDefault()
      const name = nameInput.value.trim()
      if (name !== '') {
        addNome(name)
        nameInput.value = ''
      }
    })
})