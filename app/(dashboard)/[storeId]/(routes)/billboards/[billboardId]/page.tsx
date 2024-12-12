import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
    params
}: {
    params: { billboardId: string }
}) => {
    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    });
    
    return (
        <div className="flex-col relative bg-[url('/beige-bg.png')] bg-cover bg-center bg-[#FDF0DA] min-h-screen">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={billboard} />
            </div>
        </div>
    );
}
 
export default BillboardPage;