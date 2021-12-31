/// <reference types="react" />
interface ProfileComponentProps {
    name: string;
    address: string;
    onClick?: () => void;
}
export default function ProfileComponent({ name, address, onClick }: ProfileComponentProps): JSX.Element;
export {};
