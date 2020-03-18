import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import ReactHtmlParser from 'react-html-parser';
import { Modal, Form, Icon, Header, Button, Table, Segment } from 'semantic-ui-react';

const CommonModal = props => {
    const { htmlContent } = props;
    const ignoreDefaultCancel = e => {
        e.preventDefault();
        props.cancelAction();
    };
    const ignoreDefaultConfirm = e => {
        e.preventDefault();
        props.confirmAction();
    };

    return (
        !!props.open && (
            // <FocusTrap>
            <Modal
                open={props.open}
                closeOnDimmerClick={props.closeOnDimmerClick === 'no' ? false : true}
                size={props.size ? props.size : 'tiny'}
                onClose={props.cancelAction || props.onClose}

                style={
                    {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }
            >
                <Header as='h2' attached='top' style={{ color: 'white', backgroundColor: '#0E6EB8', padding: "10px" }}>
                    {props.title}
                    <Icon name='cancel' onClick={ignoreDefaultCancel} title={props.cancelButtonText || 'Cancel'} style={{ float: 'right' }} />
                </Header>
                <Modal.Content style={{ padding: "0px 10px" }}>
                    {htmlContent && ReactHtmlParser(props.htmlContent)}
                    {props.displayHtml ? ReactHtmlParser(props.children) : props.children}
                    <Form style={{ padding: '24px' }}>
                        <Form.Field
                            style={{ borderCollapse: 'collapse', visibility: props.confirmButton ? props.confirmButton : 'visible' }}
                        >
                            <Button
                                title={props.clearButtonText ? props.clearButtonText : 'Clear Changes'}
                                onClick={ignoreDefaultConfirm}
                                disabled={props.disabled}
                                color={'red'}
                                floated='right'
                                style={{ marginLeft: '10px' }}
                            >
                                {props.clearButtonText ? props.clearButtonText : 'Confirm'}
                            </Button>
                            <Button
                                title={props.confirmButtonText ? props.confirmButtonText : 'Confirm'}
                                onClick={ignoreDefaultConfirm}
                                disabled={props.disabled}
                                color={'blue'}
                                floated='right'
                                style={{ marginRight: '10px' }}
                            >
                                {props.confirmButtonText ? props.confirmButtonText : 'Confirm'}
                            </Button>
                        </Form.Field>

                    </Form>
                </Modal.Content>
            </Modal>
            // </FocusTrap> 
        )
    )
};
CommonModal.propTypes = {
    buttonText: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    closeOnDimmerClick: PropTypes.string,
    title: PropTypes.string.isRequired,
    open: PropTypes.any.isRequired,
    cancelAction: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired,
    scrolling: PropTypes.bool
};

export default CommonModal;
