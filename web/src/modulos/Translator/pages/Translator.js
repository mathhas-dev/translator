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
    Loader
} from 'semantic-ui-react'
import { translatorStore, languages } from '../stores'
import { language_to_option } from 'utils'
import { useTranslation } from "react-i18next";

const FormTranslator = observer((props) => {
    const list = languages.list.languages;
    const { t } = useTranslation();

    useEffect(() => {
        languages.reload();
    }, [])

    const handleChangeSelect = prop => (event, { value }) => {
        translatorStore.dados[prop] = value
    }

    const handleChange = (event, { value }) => {
        translatorStore.dados.text = value
        console.log(translatorStore.dados.text)
    }

    return (
        <>
            <Form>
                <Grid columns='equal'>
                    <GridRow centered >
                        <Select
                            placeholder={t("Base Language")}
                            options={list ? language_to_option(list) : []}
                            value={translatorStore.dados.base_language !== "" ? translatorStore.dados.base_language : null}
                            onChange={handleChangeSelect('base_language')}
                            search
                            selection
                        />
                        {
                            translatorStore.sending
                                ?
                                <Loader active inline />
                                :
                                <Icon name="arrow alternate circle right outline" size="big" />
                        }
                        <Select
                            placeholder={t("Target Language")}
                            options={list ? language_to_option(list) : []}
                            value={translatorStore.dados.target_language !== "" ? translatorStore.dados.target_language : null}
                            onChange={handleChangeSelect('target_language')}
                            search
                            selection
                        />
                    </GridRow>
                    <GridRow>
                        <GridColumn >
                            <TextArea
                                rows={10}
                                onChange={handleChange}
                            />
                        </GridColumn>
                        <GridColumn >
                            <TextArea
                                rows={10}
                                value={translatorStore.dados.translated_text}
                            />
                        </GridColumn>
                    </GridRow>
                    <GridRow centered>
                        <Button primary
                            content={t("Translate!")}
                            onClick={() => translatorStore.translate()}
                        />
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
            <Grid textAlign='center' style={{ paddingTop: '20vh' }} centered>
                <Header size='huge'>My Translator</Header>
            </Grid>
            <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: '90%' }}>

                    <Message
                        hidden={translatorStore.message === null}
                        {...translatorStore.message}
                    />
                    <Message
                        hidden={languages.message === null}
                        {...languages.message}
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