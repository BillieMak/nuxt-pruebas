
function hello(){
    alert('Hola React TSX')
}

const names = ['John', 'Jane', 'Joe']

export default defineComponent({
    render () {
      return <>

       
        <button class="text-white p-2 bg-blue-500 rounded"  onClick={hello}>CLick me</button>

        {
          names.map(name => <p>{name}</p>)
        }

      </>
    }
  })