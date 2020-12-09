import React, {useState} from 'react'
import { Segment, Header, Button, Form, Grid } from 'semantic-ui-react'
import './EventForm.css'
import cuid from 'cuid'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {createTraining, selectTrainings, updateTraining} from '../../reducers/trainingsReducer'
import {Formik} from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../common/form/MyTextInput'
import MyTextArea from '../common/form/MyTextArea'

export default function EventForm({match, history}) {

   //const [btnLoadind, setBtnLoading] = useState(false);

    const selectedTraining = useSelector(selectTrainings).find(e => e.id === match.params.id);

    const initialValues = selectedTraining ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
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
                        onSubmit={values => {
                            
                            /* setBtnLoading(true);
                            selectedTraining ? dispatch(updateTraining(values)) :
                            dispatch(createTraining({
                                ...values, 
                                id: cuid(),
                                hostedBy: "Bob",
                                hostPhotoURL: "/assets/user.png"
                            }));
                            setTimeout(() => {
                                history.push('/trainings');
                            }, 1500) */
                            
                        }}
                    >
                            <Form className="ui form">
                            {/* <FormField>
                                <Field name="title" placeholder="Nom de l'évènement" />
                                <ErrorMessage name="title" render={error => <Label pointing color="red" content={error} />}/>
                            </FormField> */}
                            <Header sub color="teal" content="Détails de la séance" />
                            <MyTextInput name="title" placeholder="Nom de l'èvènement" />
                            <MyTextInput name="category" placeholder="Catégorie" />
                            <MyTextInput name="description" placeholder="Description" />
                            {/* <MyTextArea name="description" placeholder="Description" rows={3} /> */}
                            <Header sub color="teal" content="Lieu de la séance" />
                            <MyTextInput name="city" placeholder="Ville" />
                            <MyTextInput name="venue" placeholder="Lieu" />
                            <MyTextInput name="date" placeholder="Date" type="date" />
                            <Button
                                type="submit" 
                                floated="right" 
                                color="teal"
                                content="Enregistrer" 
                            />
                            <Button 
                                as={Link} 
                                to="/trainings" 
                                type="submit" 
                                floated="right" 
                                content="Annuler" 
                            />
                        </Form> 
                    </Formik>
                </Segment>
            </Grid.Column>
        </Grid>


    )
}







import React, {useState} from 'react'
import { Segment, Header, Button, Form, Grid } from 'semantic-ui-react'
import './EventForm.css'
import cuid from 'cuid'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {createTraining, selectTrainings, updateTraining} from '../../reducers/trainingsReducer'
import {Formik} from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../common/form/MyTextInput'
import MyTextArea from '../common/form/MyTextArea'

export default function EventForm({match, history}) {

   //const [btnLoadind, setBtnLoading] = useState(false);

    const selectedTraining = useSelector(selectTrainings).find(e => e.id === match.params.id);

    const initialValues = selectedTraining ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
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

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    } 
    

    /* const handleFormSubmit = () => {
        selectedTraining ? updatedTraining({...selectedTraining, ...values}) :
        createTraining({...values,id: cuid() });
        setValues(initialState)
        setOpenForm(false)
    } */

    const handleFormSubmit = () => {
        selectedTraining ? dispatch(updateTraining(values)) :
        dispatch(createTraining({...values, id: cuid()}));
        history.push('/trainings');
    } 


    return (
        <Grid centered>
            <Grid.Column mobile={16} tablet={14} computer={12}>
                <Segment clearing className="form__segment">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={values => 
                            console.log(values)
                            
                            /* setBtnLoading(true);
                            selectedTraining ? dispatch(updateTraining(values)) :
                            dispatch(createTraining({
                                ...values, 
                                id: cuid(),
                                hostedBy: "Bob",
                                hostPhotoURL: "/assets/user.png"
                            }));
                            setTimeout(() => {
                                history.push('/trainings');
                            }, 1500) */
                            
                        }
                    >
                        {({values, handleFormChange, handleFormSubmit}) =>
                        
                            <Form className="ui form">
                            <FormField>
                                <Field name="title" placeholder="Nom de l'évènement" />
                                <ErrorMessage name="title" render={error => <Label pointing color="red" content={error} />}/>
                            </FormField>
                            <FormField>
                                <Field name="category" placeholder="Catégorie" />
                                <ErrorMessage name="category" render={error => <Label pointing color="red" content={error} />}/>
                            </FormField>
                            <FormField>
                                <Field name="description" placeholder="Description" />
                                <ErrorMessage name="description" render={error => <Label pointing color="red" content={error} />}/>
                            </FormField>
                            <FormField>
                                <Field name="city" placeholder="Ville"  />
                                <ErrorMessage name="city" render={error => <Label pointing color="red" content={error} />}/>
                            </FormField>
                            <FormField>
                                <Field name="venue" placeholder="Lieu" />
                                <ErrorMessage name="venue" render={error => <Label pointing color="red" content={error} />}/>
                            </FormField>
                            <FormField>
                                <Field name="date" placeholder="Date" type="date" />
                                <ErrorMessage name="date" render={error => <Label pointing color="red" content={error} />}/>
                            </FormField>
                        
                            <Button
                                type="submit" 
                                floated="right" 
                                color="teal"
                                content="Enregistrer" 
                            />
                            <Button 
                                as={Link} 
                                to="/trainings" 
                                type="submit" 
                                floated="right" 
                                content="Annuler" 
                            />
                        </Form> 
                        }
                    </Formik>
                </Segment>
            </Grid.Column>
        </Grid>


    )
}