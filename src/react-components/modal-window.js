import React from 'react';
import {Modal} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

const ModalWindow = ({ isModalOpen, handleCloseModal, children }) => {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
            open={isModalOpen}
            onClose={handleCloseModal}
        >
            <div className={classes.paper}>
                {children}
            </div>
        </Modal>
    );
};

export default ModalWindow;