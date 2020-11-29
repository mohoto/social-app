import React from 'react'
import { Segment, Header, Form, Input, Button } from 'semantic-ui-react'

export default function EventForm({setOpenForm}) {
    return (
        <Segment clearing>
            <Header>Créer un évènement</Header>
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Nom de l'évènement" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Catégorie" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Ville" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Lieu" />
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date" />
                </Form.Field>
                <Button type="submit" floated="right" positive content="Enregistrer" />
                <Button type="submit" floated="right" content="Annuler" onClick={() => setOpenForm(false)} />
            </Form>
        </Segment>
    )
}
