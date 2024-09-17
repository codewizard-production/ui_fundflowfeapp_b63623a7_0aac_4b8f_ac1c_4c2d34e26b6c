import * as React from "react";
import { Box } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import RenderFormContols from "components/formControls/RenderFormContols";

const Component = (props) => {

    const { onInputChange, onSubmit, shadow } = props;
    const form = React.useRef(null);

    const boxShadow = shadow ? "0 1px 5px rgba(0,0,0,.15) !important" : null;
    const borderRadius = shadow ? "3px !important" : null;

    const handleSubmit = () => {
        if (onSubmit) onSubmit();
    }

    const OnInputChange = (e) => {
        if (onInputChange) onInputChange(e);
    }

    React.useEffect(() => {
        if (props.setForm) props.setForm(form);
    }, [props, form]);

    React.useEffect(() => {
        ValidatorForm.addValidationRule('isTruthy', value => value);
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <ValidatorForm ref={form} onSubmit={handleSubmit}>
                <Box style={{ display: 'block', width: '100%', marginBottom: 5 }}>
                    <Box sx={{ float: "left", minWidth: "45%", margin: 2, boxShadow, borderRadius }}>
                        <RenderFormContols shadow={true} location="fundinground" mode={props.mode} title={"FundingRound"}
                            controls={props.controls.fundinground} options={props.options} onInputChange={OnInputChange} />
                    </Box>
                    <Box sx={{ float: "left", minWidth: "45%", margin: 2, boxShadow, borderRadius }}>
                        <RenderFormContols shadow={true} location="investorleadinvestor" mode={props.mode} title={"Investor"}
                            controls={props.controls.investorleadinvestor} options={props.options} onInputChange={OnInputChange} />
                    </Box>
                    <Box sx={{ float: "left", minWidth: "45%", margin: 2, boxShadow, borderRadius }}>
                        <RenderFormContols shadow={true} location="startupfundedstartup" mode={props.mode} title={"Startup"}
                            controls={props.controls.startupfundedstartup} options={props.options} onInputChange={OnInputChange} />
                    </Box>
                </Box>
            </ValidatorForm>
        </Box>
    );

}

export default Component;