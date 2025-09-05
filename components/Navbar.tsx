import { checkUsers } from "@/app/lib/checkUsers";



export default function Navbar() {
    const user = checkUsers();
  return (
    <div>Navbar</div>
  );
}