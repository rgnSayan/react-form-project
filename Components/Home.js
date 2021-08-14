import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import SearchIcon from '@material-ui/icons/Search'
import './Home.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '50px',
        marginTop: '30px',
        border: '1px solid black',
    },

    heading: {
        flexBasis: '33.33%',
        flexShrink: 0,
        color: '#394e99',
        fontSize: '2.5em',
        fontFamily: 'Times Of Roman',
        fontWeight: '800',
    },
    secondaryHeading: {
        color: '#394e99',
        fontSize: '2em',
        fontFamily: 'Times Of Roman'
    },
}));


function Home() {
    const [userInput, setUserInput] = useState("")
    const [active, setActive] = useState(false)
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="home">
            <div className="search__input">
                <input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    type="text"
                    placeholder=""
                />
                <SearchIcon className="search__inputIcon" />
            </div>

            <div className="home__dropDownContainer">
                <div className="home__check" onClick={() => setActive(false)} >
                    {active ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
                    <label>Select Your Category</label>
                </div>

                <div className="container" onClick={() => setActive(true)}>

                    <div className={classes.root}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Appliances</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                    <Typography className={classes.secondaryHeading}>Appliances</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </div>

                <div className="home__button">
                    <Link to="/form1">
                        <button type="button">NEXT</button>
                    </Link>
                </div>
            </div >

        </div >
    )
}

export default Home
