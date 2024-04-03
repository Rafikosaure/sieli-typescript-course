const form = document.querySelector('form') as HTMLFormElement

console.log(form.children);

const input = document.querySelector('input') as HTMLInputElement

const handleSubmit = (event: Event) => {
    event.preventDefault()
    console.log("SUBMITTED");
}

form.addEventListener('submit', handleSubmit)