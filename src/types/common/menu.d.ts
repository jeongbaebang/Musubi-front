export interface RenderMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  handleClick: () => void;
  menuList: string[];
}
