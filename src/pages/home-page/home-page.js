import React, {useEffect, useState} from 'react';
import {
    Container,
    TextField,
    TableBody,
    TableRow,
    TableCell,
    Button
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import useTable from "../../react-components/useTable";
import {Delete, EditOutlined} from "@material-ui/icons";
import ModalWindow from "../../react-components/modal-window";

const headCells = [
    { id: 'name', label: 'Name' },
    { id: 'surname', label: 'Surname' },
    { id: 'desc', label: 'Description' },
    { id: 'actions', label: 'Actions' }
];

const useStyles = makeStyles((theme) => ({
    fieldsContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        width: '100%',
        marginBottom: 25
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    deleteIcon: {
        cursor: 'pointer'
    },
    editIcon: {
        cursor: 'pointer'
    },
    modalTitle: {
        textAlign: 'center'
    },
    tableCell: {
        width: '25%'
    }
}));

const HomePage = ({ users, onGetUsers, onCreateUser, onUpdateUser, onDeleteUser }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [desc, setDesc] = useState('');
    const [userIdForEdit, setUserIdForEdit] = useState(0);
    const [userIdForDelete, setUserIdForDelete] = useState(0);

    const classes = useStyles();

    const {
        TblContainer,
        TblHead,
        TblPagination,
        rowsAfterPaging
    } = useTable(users, headCells);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setUserIdForEdit(0);
        setUserIdForDelete(0);
        setName('');
        setSurname('');
        setDesc('');
    };

    const handleUserEdit = ({ id, name, surname, desc }) => {
        setUserIdForEdit(id);
        setName(name);
        setSurname(surname);
        setDesc(desc);

        handleOpenModal();
    };

    const handleUserDelete = id => {
        setUserIdForDelete(id);
        handleOpenModal();
    };

    const handleConfirm = () => {
        if (userIdForEdit) {
            onUpdateUser({ id: userIdForEdit, name, surname, desc });
        } else if (userIdForDelete) {
            onDeleteUser(userIdForDelete);
        } else {
            onCreateUser({ name, surname, desc });
        }

        handleCloseModal();
    };

    const handleName = event => {
        setName(event.target.value);
    };

    const handleSurname = event => {
        setSurname(event.target.value);
    };

    const handleDesc = event => {
        setDesc(event.target.value);
    };

    const fieldsData = [
        { label: 'Name', defaultValue: name, onChange: handleName },
        { label: 'Surname', defaultValue: surname, onChange: handleSurname },
        { label: 'Description', defaultValue: desc, onChange: handleDesc }
    ];

    const modalButtons = [
        { handler: handleConfirm, text: 'Confirm' },
        { handler: handleCloseModal, text: 'Cancel' }
    ];

    const modalText = userIdForDelete
        ? (
            <h2 id="modal-title" className={classes.modalTitle}>
                Are you sure you want to delete the user?
            </h2>
        )
        : (
            <>
                <h2 id="modal-title" className={classes.modalTitle}>
                    {userIdForEdit ? 'Edit user' : 'Creating a new user'}
                </h2>
                {
                    fieldsData.map(fieldData => (
                        <TextField
                            {...fieldData}
                            key={fieldData.label}
                            className={classes.textField}
                            required
                        />
                    ))
                }
            </>
        );

    useEffect(() => {
        onGetUsers();
    }, []);

    return (
        <Container maxWidth="md">
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpenModal}
            >
                Add new user
            </Button>
            <ModalWindow
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
            >
                {modalText}
                <Container className={classes.container}>
                    {
                        modalButtons.map(({ handler, text }) => (
                            <Button
                                key={text}
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                onClick={handler}
                            >
                                {text}
                            </Button>
                        ))
                    }
                </Container>
            </ModalWindow>
            <TblContainer>
                <TblHead />
                <TableBody>
                    {
                        rowsAfterPaging().map(user => (
                            <TableRow key={user.id}>
                                <TableCell className={classes.tableCell}>{user.name}</TableCell>
                                <TableCell className={classes.tableCell}>{user.surname}</TableCell>
                                <TableCell className={classes.tableCell}>{user.desc}</TableCell>
                                <TableCell className={classes.tableCell}>
                                    <EditOutlined
                                        className={classes.editIcon}
                                        onClick={() => handleUserEdit(user)}
                                    />
                                    <Delete
                                        className={classes.deleteIcon}
                                        onClick={() => handleUserDelete(user.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </TblContainer>
            <TblPagination />
        </Container>
    );
};

export default HomePage;