let text = "Some text with 'aaaaa' and test's  feeeee"
document.getElementById('DZ1_2').textContent = text

Regexp1 = /'/gm
Regexp2 = /('\B|\B')/gm

document.getElementById('dz1_rez').textContent = text.replace(Regexp1, "\"")
document.getElementById('dz2_rez').textContent = text.replace(Regexp2, "\"")

document.getElementById('DZ1_2').addEventListener('input', event => {
    document.getElementById('dz1_rez').textContent = event.target.value.replace(Regexp1, "\"")
    document.getElementById('dz2_rez').textContent = event.target.value.replace(Regexp2, "\"")
})

class FormValidator {
    constructor(form) {
        this.form = form;
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
        };
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон подчиняется шаблону +7(000)000-0000',
            email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        // this.validateForm()
        this.errorClass = 'error-msg';
    }

    validateForm() {
        let error_counter = 0;
        let fields = this.form.getElementsByTagName('input');
        for (let field of fields){
            this.dropError(field);
            error_counter += this.validateField(field)
        }
        if(error_counter > 0) {
            this.valid = false;
            console.log('Bad form')
        } else {
            this.valid = true;
        }
    }

    validateField(field) {
        if(this.patterns[field.name].test(field.value)) {
            return 0
        } else {
            this.addError(field)
            return 1
        }
    }

    addError(field) {
        field.style.borderColor = "red";
        let error_msg = this.errors[field.name];
        let error = `<div class="${this.errorClass}" style="color: red">${error_msg}</div> `;
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }

    dropError(field) {
        field.style.borderColor = "";
        let error = field.parentNode.querySelector(`.${this.errorClass}`);
        if(error) {
            error.remove();
        }
    }
}

window.onload = () => {
    const valid = new FormValidator(document.getElementById('myform'))
    document.getElementById('myform').addEventListener('submit', e => {
        valid.validateForm();
        if(!valid.valid){
            e.preventDefault();
        }
    })
}
