import { Field, Form, Formik } from 'formik'

export const AddForm = ({ addNote }) => {
	const handleSubmit = (values, options) => {
		addNote(values)
		options.resetForm()
	}
	const initialValues = {
		title: '',
		desc: '',
	}

	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<Field name='title' placeholder='Title' />
					<Field name='desc' placeholder='Desc' />
					<button type='submit'>Add</button>
				</Form>
			</Formik>
		</div>
	)
}
