/// <reference types="react" />
interface ProfileComponentProps {
    name: string;
    icon: string;
    onClick?: () => void;
}
export default function ProfileComponent({ name, icon, onClick }: ProfileComponentProps): JSX.Element;
export {};
