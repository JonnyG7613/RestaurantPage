export function contactPage() {
    const form = document.createElement('form')
    const emailLabel = document.createElement('label')
    const emailInput = document.createElement('input')
    const commentLabel = document.createElement('label')
    const commentInput = document.createElement('input')
    const submit = document.createElement('button')

    const emailInputs = {
        type: 'text',
        id: 'emailInput',
        name: 'emailInput',
        value: 'email@place.com'
    }

    const commentInputs = {
        type: 'text',
        id: 'commentInput',
        name: 'commentInput',
        value: ''
    }

    emailLabel.getAttribute('for', 'email')

    commentLabel.getAttribute('for', 'text')

    Object.keys(emailInputs).forEach(e => {
        emailInput.setAttribute(e, emailInputs[e])
    })

    Object.keys(commentInputs).forEach(e => {
        commentInput.setAttribute(e, commentInputs[e])
    })

    form.appendChild(emailLabel)
    form.appendChild(emailInput)
    form.appendChild(commentLabel)
    form.appendChild(commentInput)
    form.appendChild(submit)

    return form

}