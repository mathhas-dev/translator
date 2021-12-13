import React, { useEffect } from 'react'
import Page from 'pageTemplates/StaticPage'
import { observer } from 'mobx-react'
import {
    Message,
    Header,
    Grid,
    GridColumn,
    GridRow,
    Form,
    TextArea,
    Button,
    Select,
    Icon,
    Label,
} from 'semantic-ui-react'
import { translatorStore } from '../stores'

const FormTranslator = observer((props) => {

    return (
        <>
            <Form>
                <Grid columns='equal'>
                    <GridRow centered >
                        <Select />
                        <Icon name="arrow alternate circle right outline" size="big" />
                        <Select />
                    </GridRow>
                    <GridRow>
                        <GridColumn >
                            <TextArea rows={10} />
                        </GridColumn>
                        <GridColumn >
                            <TextArea rows={10} />
                        </GridColumn>
                    </GridRow>
                    <GridRow centered>
                        <Button primary>Translate!</Button>
                    </GridRow>
                </Grid>
            </Form>
        </>
    )
}
)

const ContentTranslator = observer((props) => {

    return (
        <>
            <Grid textAlign='center' style={{ paddingTop: '10vh' }} centered>
                <Header size='huge'>My Translator</Header>
            </Grid>
            <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: '90%' }}>

                    <Message
                        hidden={translatorStore.message === null}
                        {...translatorStore.message}
                    />

                    <FormTranslator />

                </Grid.Column>
            </Grid>
            <Grid textAlign='center' style={{ paddingTop: '10vh' }} centered>
                <Label size='small' basic>My Translator is made with <Icon name='heart' />by Matheus using IBM Watson</Label>
            </Grid>
        </>
    )
})

const Translator = observer((props) => {

    return (
        <Page showLeftPanel >
            <div style={{ width: '100%' }}>
                <ContentTranslator />
            </div>
        </Page >
    )
})

export default Translator;