import { Component, PropsWithChildren } from 'react';
import './OverlayMenu.scss';

interface OverlayMenuProps extends PropsWithChildren {
  onEdit: () => void;
  onDelete: () => void;
}
interface OverlayMenuState {
  isButtonShown: boolean;
  isMenuShown: boolean;
}

export class OverlayMenu extends Component<OverlayMenuProps, OverlayMenuState> {
  state: OverlayMenuState;
  constructor(props: OverlayMenuProps) {
    super(props);
    this.state = {
      isButtonShown: false,
      isMenuShown: false,
    };
    this.handleMenuButtonShow = this.handleMenuButtonShow.bind(this);
    this.handleMenuButtonHide = this.handleMenuButtonHide.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleMenuButtonShow() {
    this.setState({ isButtonShown: !this.state.isMenuShown });
  }

  handleMenuButtonHide() {
    this.setState({ isButtonShown: false });
  }

  openMenu() {
    this.setState({ isButtonShown: false, isMenuShown: true });
  }

  closeMenu() {
    this.setState({ isButtonShown: false, isMenuShown: false });
  }

  render() {
    return (
      <div
        className='OverlayMenu'
        onMouseEnter={this.handleMenuButtonShow}
        onMouseLeave={this.handleMenuButtonHide}
      >
        {this.props.children}
        {this.state.isButtonShown && (
          <span title='menu-button' className='OverlayMenu__button' onClick={this.openMenu}></span>
        )}
        {this.state.isMenuShown && (
          <ul role='menu' className='OverlayMenu__menu'>
            <span
              className='OverlayMenu__menu-close'
              data-testid='menu-close-button'
              onClick={this.closeMenu}
            ></span>
            <li className='OverlayMenu__menuItem' role='menuitem' onClick={this.props.onEdit}>
              Edit
            </li>
            <li className='OverlayMenu__menuItem' role='menuitem' onClick={this.props.onDelete}>
              Delete
            </li>
          </ul>
        )}
      </div>
    );
  }
}
