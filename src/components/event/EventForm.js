import React, {useState} from 'react'
import { Segment, Header, Button, Grid } from 'semantic-ui-react'
import './EventForm.css'
import cuid from 'cuid'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {createTraining, selectTrainings, updateTraining} from '../../reducers/trainingsReducer'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../common/form/MyTextInput'
import MyTextArea from '../common/form/MyTextArea'
import MySelectInput from '../common/form/MySelectInput'
import {categoryData, dureeData} from '../../api/categoryOptions'
import MyDateInput from '../common/form/MyDateInput'

const duree = {

}

export default function EventForm({match, history}) {

   //const [btnLoadind, setBtnLoading] = useState(false);

    const selectedTraining = useSelector(selectTrainings).find(e => e.id === match.params.id);

    const initialValues = selectedTraining ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
        time: '',
        duree: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Précisez le nom de l'èvenement"),
        category: Yup.string().required("Précisez la catégorie"),
        description: Yup.string().required("Donnez une description"),
        city: Yup.string().required("Précisez la ville"),
        venue: Yup.string().required("Précisez le lieu"),
        date: Yup.string().required("Précisez la date"),


    });
     
    const [values, setValues] = useState(initialValues);
    const dispatch = useDispatch();

    /* const handleFormChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }  */
    

    /* const handleFormSubmit = () => {
        selectedTraining ? updatedTraining({...selectedTraining, ...values}) :
        createTraining({...values,id: cuid() });
        setValues(initialState)
        setOpenForm(false)
    } */

    /* const handleFormSubmit = () => {
        selectedTraining ? dispatch(updateTraining(values)) :
        dispatch(createTraining({...values, id: cuid()}));
        history.push('/trainings');
    } */


    return (
        <Grid centered>
            <Grid.Column mobile={16} tablet={14} computer={12}>
                <Segment clearing className="form__segment">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            
                            //setBtnLoading(true);
                            selectedTraining ? dispatch(updateTraining(values)) :
                            dispatch(createTraining({
                                ...values, 
                                id: cuid(),
                                hostedBy: "Bob",
                                hostPhotoURL: "/assets/user.png"
                            }));
                            setTimeout(() => {
                                history.push('/trainings');
                            }, 1500) 
                            
                        }}
                    >
                            {({isSubmitting, dirty, isValid}) => (
                                <Form className="ui form">
                                {/* <FormField>
                                    <Field name="title" placeholder="Nom de l'évènement" />
                                    <ErrorMessage name="title" render={error => <Label pointing color="red" content={error} />}/>
                                </FormField> */}
                                <Header sub color="teal" content="Détails de la séance" />
                                <MyTextInput name="title" placeholder="Nom de l'èvènement" />
                                <MySelectInput name="category" placeholder="Catégorie" options={categoryData} />
                                <MyTextArea name="description" placeholder="Description" rows={3} />
                                <Header sub color="teal" content="Lieu de la séance" />
                                <MyTextInput name="city" placeholder="Ville" />
                                <MyTextInput name="venue" placeholder="Lieu" />
                                <Grid columns='equal'>
                                    <Grid.Column>
                                        <MyDateInput
                                            name="date" 
                                            placeholderText="Date" 
                                            timeCaption='Time'
                                            dateFormat='dd/MM/yyyy'
                                            //dateFormat='dd/MM/yyyy'
                                        />
                                    </Grid.Column>
                                    <Grid.Column >
                                        <MyDateInput
                                            name="time" 
                                            placeholderText="Heure de début" 
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm"
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <MySelectInput name="duree" placeholder="Durée de la séance" options={dureeData} />
                                    </Grid.Column>
                                </Grid>
                                <Segment basic clearing>
                                    <Button
                                        loading={isSubmitting}
                                        disabled={!isValid || !dirty || isSubmitting}
                                        type="submit" 
                                        floated="right" 
                                        color="teal"
                                        content="Enregistrer" 
                                    />
                                    <Button
                                    disabled={isSubmitting}
                                        as={Link} 
                                        to="/trainings" 
                                        type="submit" 
                                        floated="right" 
                                        content="Annuler" 
                                    />
                                </Segment>
                            </Form> 
                            )}
                    </Formik>
                </Segment>
            </Grid.Column>
        </Grid>


    )
}
