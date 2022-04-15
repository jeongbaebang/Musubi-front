export interface RenderMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  menuList: string[];
}
