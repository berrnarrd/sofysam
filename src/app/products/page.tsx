import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if needed
import Footer from '../components/Footer'; // Adjust the path if needed

const products = [
    {
        id: 1,
        name: 'Refrigerant 22',
        description: 'This colorless gas is better known as hydrochlorofluorocarbon HCFC-22. Commonly used as a propellant or refrigerant. Largely used for air conditioning applications.',
        image: '/product1.png', // Replace with the actual path to your image
    },
    {
        id: 2,
        name: 'Refrigerant 32',
        description: 'The next generation refrigerant that efficiently carries heat and has lower environmental impact. It is also known as difluoromethane and belongs to the HFC family of refrigerant. It is the preferred replacement for R-410a in low temperature refrigeration and air conditioning. R-33 is NOT to be used as a retrofit.',
        image: '/product2.png', // Replace with the actual path to your image
    },
    {
        id: 3,
        name: 'Refrigerant 507',
        description: 'R-507 is an azeotropic mixture of R-125 and R-143a with zero ozone depleting potential (ODP). It is safe, effective alternative to some chlorofluorocarbon (CFC) like R-502 and hydrochlorofluorocarbon (HCFC) refrigerants.',
        image: '/product3.png', // Replace with the actual path to your image
    },
    {
        id: 4,
        name: 'Refrigerant 404A',
        description: 'R-404a is a long term non-ozone depleting potential and HFC blend that is widely used in low and medium temperature refrigeration applications, such as those used in commercial refrigeration. Whilst it has become the widely accepted alternative or replacement for CFC R-502 and HCFC R-22.',
        image: '/product4.png', // Replace with the actual path to your image
    },
    {
        id: 5,
        name: 'Refrigerant 410A',
        description: 'R-410a is a zeotropic but near azeotropic mixture of difluoromethane called (R-32) and pentafluoroethane called (R-125) that is used as a refrigerant in air conditioning applications. It does not contribute to ozone depletion, and is therefore widely used.',
        image: '/product5.png', // Replace with the actual path to your image
    },
    {
        id: 6,
        name: 'Refrigerant 410A',
        description: 'R-134a is an extremely common refrigerant used in a wide range of refrigeration and air conditioning applications, including medium and high temperature refrigeration (both domestic and commercial), residential and light air conditioning, automotive air conditioning as a replacement for CFC R-12 and industrial applications as a replacement for HCFC R-22 such as centrifugal chillers, which requires polyolester (POE) lubricant to be used in the compressor. It is also a common component in many HFC refrigerant blends and is used in some propellant applications.',
        image: '/product6.png', // Replace with the actual path to your image
    },
    {
        id: 7,
        name: 'SUNISO REFRIGERANT OIL 4GS',
        description: 'It miscible well with HCFC refrigerant like R-22 while featuring excellent stability and giving long trouble-free service life in the refrigeration systems using above refrigerant. In addition, Suniso 4GS oils also perform excellently with natural refrigerants such as R-600, R-290 and R-717',
        image: '/product7.png', // Replace with the actual path to your image
    },
    {
        id: 8,
        name: 'SUNISO REFRIGERANT OIL 3GS',
        description: 'It miscible well with HCFC refrigerant like R-22 while featuring excellent stability and giving long trouble-free service life in the refrigeration systems using above refrigerant. In addition, Suniso 3GS oils also perform excellently with natural refrigerants such as R-600, R-290 and R-717.',
        image: '/product8.png', // Replace with the actual path to your image
    },
    {
        id: 9,
        name: 'SUNISO REFRIGERANT OIL 5GS',
        description: 'Excellent lubricity and chemical stability coexisting with refrigerant gas. Wonderful miscibility with refrigerant and outstanding mobility in low temperature. ',
        image: '/product9.png', // Replace with the actual path to your image
    },
    {
        id: 10,
        name: 'Aluminum Foil Tape',
        description: 'Comes in extensive variety to meet all levels of performance. Aggressive rubber adhesive sticks well to most surfaces. It applies to shielding, patching, seaming, and sealing to protect materials from moisture, heat, odor, and chemical transmission. Withstand exposure to flame, weathering, moisture and UV. Used for aluminum seams and joints, sheet metals, fibrous and metal ducts, and aluminum backed duct boards.',
        image: '/product10.png', // Replace with the actual path to your image
    },
    {
        id: 11,
        name: 'POLYETHYLENE TAPE WHITE (CROCO)',
        description: 'Polyethylene film has a smooth and uniform thickness. It has chemical and moisture resistant properties and it is used in low temperature applications specifically for air conditioning pipe wrapping tape.',
        image: '/product11.png', // Replace with the actual path to your image
    },
    {
        id: 12,
        name: 'AEROTAPE INSULATION FOAM TAPE',
        description: 'A flexible self-adhering foam tape made from the high quality EPDM rubber as closed-cell insulation. Ideal for wrapping hot and cold pipe, tubing and fittings. It is easy to use and prevents condensation, heat gain/loss and frost from forming on cold systems.',
        image: '/product12.png', // Replace with the actual path to your image
    },
    {
        id: 13,
        name: 'K-FLEX INSULATION FOAM TAPE',
        description: 'Is used to retard heat gain and prevent condensation or frost formation on cold water plumbing, chilled water, and refrigeration lines. It also reduces heat flow for hot water plumbing, liquid heating, and dual temperature piping.',
        image: '/product13.png', // Replace with the actual path to your image
    },
    {
        id: 14,
        name: 'ACCESS VALVE ¼',
        description: 'It is an extension tube used for recharging refrigerants. Connection size 1/4” OD X 3/16” ID',
        image: '/product14.png', // Replace with the actual path to your image
    },
    {
        id: 15,
        name: 'COPPER TUBING or COPPER PIPE AND FITTINGS',
        description: 'Are commonly used in refrigerant lines in HVAC (Heating, Ventilating and Air Conditioning) systems. There are two basic types of copper pipes, soft copper and rigid copper and offer excellent corrosion-resistance and reliable connections. It is joined using flare connection, compression connection, pressed connection or solder. Copper tube fittings offer corrosion resistance and antibacterial qualities and suitable for use in plumbing, heating, or cooling projects.They are lead- free and fire resistant, making them suitable for applications where durability and safety are desired.',
        image: '/product15.png', // Replace with the actual path to your image
    },
    {
        id: 16,
        name: 'EMKARATE RL32H',
        description: 'Is an ISO VG 32 synthetic polyol ester (POE) lubricant formulated specifically for use in refrigeration and air-conditioning compressors using HFC refrigerants.',
        image: '/product16.png', // Replace with the actual path to your image
    },
    {
        id: 17,
        name: 'EMKARATE RL68H',
        description: 'Is an ISO VG 68 synthetic polyol ester (POE) lubricant formulated specifically for use in refrigeration and air-conditioning compressors using HFC refrigerants.',
        image: '/product17.png', // Replace with the actual path to your image
    },
    {
        id: 18,
        name: 'COOL PRO CLEANSER',
        description: 'Cleanser is a fast evaporating solvents used for flushing air conditioning system, removing all contaminants and oils before the installation of parts and compressors.',
        image: '/product18.png', // Replace with the actual path to your image
    },
    {
        id: 19,
        name: 'MAPP GAS',
        description: 'A fuel gas based on a stabilized mixture of methylacetylene (propyne) and propadiene. It is widely regarded as a safer and easier-to-use substitute for acetylene.',
        image: '/product19.png', // Replace with the actual path to your image
    },
    {
        id: 20,
        name: 'DANFOSS FILTER DRIER',
        description: 'The DML Filter Drier is designed for air conditioning systems that require high moisture removal capacity. DML Filter Driers are optimized for HFC refrigerants and mineral benzene oils. The filter driers are hermetic and approved for 46 bar.',
        image: '/product20.png', // Replace with the actual path to your image
    },
    {
        id: 21,
        name: 'ALKALINE COIL CLEANER ',
        description: 'Optimal Cleaning Performance Alkaline coil cleaner chemical for air conditioner. * Corrosion inhibited, non caustic formulation * Excellent cleaning, degreasing, descaling characteristics * Organic in nature * Non-acid, non-fuming, water soluble * Removes grime, oil, grease and rust from condenser and evaporator coils.',
        image: '/product21.png', // Replace with the actual path to your image
    },
    // Add more products here
];

const ProductsPage: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center bg-[#2179B8] text-white py-12 px-4 md:px-8 md:py-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="flex flex-col items-center text-center">
                                <img src={product.image} alt={product.name} className="w-48 h-48 object-cover mb-4 rounded-lg shadow-lg border-4 border-white" />
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-sm md:text-base">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductsPage;