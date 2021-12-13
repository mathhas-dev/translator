import React, { useEffect } from 'react'
import Page from 'pageTemplates/StaticPage'
import { useHistory } from 'react-router-dom'
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
    Icon
} from 'semantic-ui-react'
import { translatorStore } from '../stores'
import { useTranslation } from "react-i18next";

const FormTranslator = (props) => {

    return (
        <>
            <Form>
                <Grid columns='equal'>
                    <GridRow centered >
                        <Select />
                        <Icon name="arrow alternate circle right outline" size="big"/>
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

const ContentTranslator = (props) => {

    return (
        <>
            <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: '90%' }}>

                    <Message
                        hidden={translatorStore.message === null}
                        {...translatorStore.message}
                    />
                    <FormTranslator />
                </Grid.Column>
            </Grid>
        </>
    )
}

const Translator = (props) => {

    return (
        <Page showLeftPanel >
            <div style={{ width: '100%' }}>
                <ContentTranslator />
            </div>
        </Page >
    )
}

export default Translator;