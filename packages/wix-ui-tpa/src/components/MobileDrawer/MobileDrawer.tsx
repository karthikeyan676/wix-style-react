import * as React from 'react';
import { classes } from './MobileDrawer.st.css';
import { Modal } from '../internal/Modal';
import { TPAComponentProps } from 'src/types';

export interface MobileDrawerProps extends TPAComponentProps {
  /** Whether the modal is opened */
  isOpen?: boolean;
  /** Callback for when clicking outside. */
  onRequestClose?(): void;
  /** Children to render inside dialog */
  children?: React.ReactNode;
  /** Defines a string value that labels the drawer element. Optional. */
  'aria-label'?: string;
  /** Identifies the element that labels the dialog element. Optional. */
  'aria-labelledby'?: string;
  /** Gives the dialog an accessible description by referring to the dialog content that describes the primary message or purpose of the dialog. Optional. */
  'aria-describedby'?: string;
}

interface DefaultProps {
  isOpen: boolean;
  onRequestClose(): void;
}

interface State {
  visiable;
}

/** MobileDrawers provide access to destinations and functionality menus, such as Action Menus, Filter Dropdown etc. This component should be used on mobile only. */
export class MobileDrawer extends React.Component<MobileDrawerProps, State> {
  state = {
    visiable: false,
  };

  static displayName = 'MobileDrawer';
  static defaultProps: DefaultProps = {
    isOpen: false,
    onRequestClose: () => {},
  };

  onRequestClose() {
    this.setState({ visiable: false });
    this.props.onRequestClose();
  }

  render() {
    const {
      isOpen,
      children,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      ['aria-describedby']: ariaDescribedBy,
      onRequestClose,
    } = this.props;
    const { visiable } = this.state;

    if (isOpen && !visiable) {
      setTimeout(() => {
        this.setState({ visiable: true });
      }, 0);
    }

    return (
      <div data-hook={this.props['data-hook']}>
        <Modal isOpen={isOpen} onRequestClose={() => this.onRequestClose()}>
          <div
            className={classes.outerContentWrapper}
            style={{
              transform: visiable ? 'translateY(0px)' : 'translateY(320px)',
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
            >
              {children}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
