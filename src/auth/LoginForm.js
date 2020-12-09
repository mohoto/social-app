import React from 'react'
import {Button, Segment, Header, Image, Message} from 'semantic-ui-react'
import { Formik, Form } from 'formik'
import ModalWrapper from '../components/common/modal/ModalWrapper'
import * as Yup from 'yup'
import MyTextInput from '../components/common/form/MyTextInput'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {logIn} from '../reducers/authReducer'
import { closeModal } from '../reducers/modalReducer'

export default function LoginForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <ModalWrapper size="mini" 
            header={
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/assets/logo192.png' /> Connexion
                 </Header>
            } >
            <Formik
            initialValues={{'email': '', 'password': ''}}
            validationSchema= {Yup.object().shape({
                email: Yup.string().required("Preciser votre e-mail").email("email invalide"),
                password: Yup.string().required("Mot de passe obligatoire")
            })}
            onSubmit={(values, {setSubmitting}) => {
                    dispatch(logIn({authenticated:true, currentUser: values}));
                    setTimeout(() => {
                        setSubmitting(false);
                        dispatch(closeModal());
                        history.push('/trainings');
                    }, 1500)
                }
            }
            >
                {({isSubmitting, dirty, isValid}) => (
                <Form className="ui form">
                    <Segment basic>
                        <MyTextInput  
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        name="email" 
                        placeholder='E-mail address'
                        />
                        <MyTextInput 
                        name="password" 
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Mot de passe'
                        type='password'
                        />
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type="submit" 
                            fluid
                            size="large"
                            color="teal"
                            content="Se connecter" 
                        />
                    </Segment>
                </Form>    
                )}
            </Formik>
            <Message>
                Pas de compte? <Link to='/'>S'enregistrer</Link>
            </Message>
        </ModalWrapper>
    )
}
