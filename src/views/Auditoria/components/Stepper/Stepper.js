import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Local from '../Local';
import Establecimiento from '../Establecimiento';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    step: {
        maxWidth: '200px'
    }
}));

function getSteps() {
    return ['Datos local', 'Establecimiento'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Local />;
        case 1:
            return <Establecimiento />;
        case 2:
            return 'Tanques';
        case 3:
            return 'Despacho';
        default:
            return 'Unknown step';
    }
}


export default function HorizontalNonLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const steps = getSteps();

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStep = step => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <div className={classes.root}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton
                            className={classes.step}
                            onClick={handleStep(index)}
                            completed={completed[index]}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <div>
                        <Redirect to='/' />
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Atrás
              </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    Siguiente
              </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" className={classes.completed}>
                                            Sección {activeStep + 1} enviada
                                        </Typography>
                                    ) : (
                                            <Button variant="contained" color="primary" onClick={handleComplete}>
                                                {completedSteps() === totalSteps() - 1 ? 'Completar' : 'Enviar paso '}
                                            </Button>
                                        ))}
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}