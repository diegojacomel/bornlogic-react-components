// Modules
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Modal from 'react-modal';
import Title from '../Title/Title';
import Button from '../Button/Button';
import ButtonClose from '../ButtonClose/ButtonClose';

const ModalWrapper = styled('div')`
    display: block;
`

const ButtonClosedStyled = styled('div')`
${({ theme }) => ` 
    button{
        top: ${theme.spacing.px24};
        right: ${theme.spacing.px40};
        width: 0;
    }
`}
`

const ModalStyles = createGlobalStyle`
${({ theme, mobileFullScreen }) => ` 
    .ReactModal__Overlay--after-open {
        background: rgba(0, 0, 0, 0.75) !important;
        z-index: 9999;
    }
    .ReactModal__Content--after-open {
        max-height: 90vh;
        max-width: 90%;
        box-sizing: border-box;
        padding: 0 !important;
        ${mobileFullScreen && `
            @media screen and (max-width: ${theme.breakpoint.md}){
                max-height: 100vh;
                max-width: 100.5vw;
                height: 100vh;
                width: 100.5vw !important;
                border-radius: 0 !important;
                border: 0 !important;
                footer {
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-around;
                }
            }
        `}
    }
`}`

const ModalHeader = styled('header')`
${({ theme }) => `
    padding: ${theme.spacing.px24} ${theme.spacing.px70} ${theme.spacing.px24} ${theme.spacing.px30};
    border-bottom: 1px solid ${theme.colors.grey5};
`}`

const ModalBody = styled('div')`
${({ theme, mobileFullScreen }) => `
    display: block;
    ${mobileFullScreen && `
        @media screen and (max-width: ${theme.breakpoint.md}){
            height: 70vh;
        }
    `}
`}`

const ModalFooter = styled('footer')`
${({ theme }) => `
    padding: ${theme.spacing.px24} ${theme.spacing.px30};
    border-top: 1px solid ${theme.colors.grey5};
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    @media screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        & > button:first-child {
            margin-bottom: ${theme.spacing.px15};
        }
    }
`}`

const ModalDefault = ({ title, visible, mobileFullScreen, width, buttonConfirmDisabled, buttonConfirmColor, buttonCancelDisabled, onClickAway, cancelButton, confirmButton, cancelButtonText, confirmButtonText, noFooter, children }) => (
    <Modal
        ariaHideApp={false}
        isOpen={visible}
        onRequestClose={onClickAway}
        style={{
            content: {
                width: width,
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '10px',
            }
        }}
    >
        <ModalWrapper>
            <ButtonClosedStyled>
                <ButtonClose onClick={onClickAway} />
            </ButtonClosedStyled>
            <ModalHeader>
                <Title tag="h4" fontWeight="bold" color="grey1" marginBottom="none">
                    {title}
                </Title>
            </ModalHeader>
            <ModalBody mobileFullScreen={mobileFullScreen}>
                {children}
            </ModalBody>
            {!noFooter
                ?
                <ModalFooter>
                    {!!cancelButton &&
                        <Button onClick={cancelButton} underlineOnHover fontColor='blueGrey3' disabled={buttonCancelDisabled} backgroundColor="white">
                            {cancelButtonText}
                        </Button>
                    }
                    {!!confirmButton &&
                        <Button onClick={confirmButton} disabled={buttonConfirmDisabled} backgroundColor={buttonConfirmColor || 'blue2'}>
                            {confirmButtonText}
                        </Button>
                    }
                </ModalFooter>
                :
                null
            }
            <ModalStyles mobileFullScreen={mobileFullScreen} />
        </ModalWrapper>
    </Modal>
)

ModalDefault.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClickAway: PropTypes.func,
    title: PropTypes.string,
    cancelButtonText: PropTypes.string,
    confirmButtonText: PropTypes.string,
    noFooter: PropTypes.bool,
    buttonConfirmDisabled: PropTypes.bool,
    buttonConfirmColor: PropTypes.string,
    buttonCancelDisabled: PropTypes.bool,
}

ModalDefault.defaultProps = {
    visible: false,
    onClickAway: () => { },
    title: "Modal Title",
    cancelButtonText: "Cancel",
    confirmButtonText: "Confirm",
    noFooter: false
}

export default ModalDefault;