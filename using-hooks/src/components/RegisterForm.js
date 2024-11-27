import { useState } from 'react'

function RegisterForm() {

    const [form, setForm] = useState({
        firstName: 'Luke',
        lastName: 'Jones',
        email: 'Luke.Jones@yahoo.com'
    })


    return (
        <>
            <label>FirstName:
                <input
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                />
            </label>
            <label>LastName:
                <input
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                />
            </label>
            <label>Email:
                <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
            </label>

            <p>First Name: {form.firstName}<br />
                Last Name: {form.lastName}<br />
                Email: {form.email}

            </p>
        </>
    )
}

export default RegisterForm;
