import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import { Col, Container, Row } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const { placeholder, writeInput, functionCall } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Container>
                <Row>
                    <Col>
                        <Typography className="mt-3"  
                        variant="h4">
                            Weather4U
                        </Typography>
                    </Col>
                    <Col>
                        <SearchBar
                            onChange={writeInput}
                            onRequestSearch={functionCall}
                            style={{
                                margin: '0 auto',
                                maxWidth: 'auto'
                            }}
                            className="mb-3 mt-3"
                            placeholder={placeholder}
                        />
                    </Col>
                </Row>
            </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
