La prueba consiste en un sistema frontend sencillo, construido en NextJS (ReactJS) y usando
Redux junto con GraphQL, que haga un pequeño CRUD sobre los recursos.
Es decir, que permita:
Crear un recurso
Editar un recurso
Eliminar un recurso
Presentar una lista con los recursos disponibles

El país se ha aventurado en un nuevo modelo para administrar su catastro. En este Catastro, al
igual que en la versión anterior, el centro de todo es el Predio.
El predio se compone de un numero predial, que lo identifica de manera inequívoca a nivel
nacional, avalúo, nombre, departamento y municipio.
Entrevista con un funcionario de catastro:
Funcionario: El sistema debe registrar la información de todos los predios de un municipio, es
necesario modificar su información y también eliminarlos. Pero el predio tiene más cosas que
están asociadas a él: tiene propietarios, construcciones y puede tener un terreno.
Entrevistador: ¿El predio siempre tiene un terreno?
Funcionario: No, puede pasar que el predio sólo tenga construcciones.
Entrevistador: ¿Qué información tienen los propietarios?
Funcionario: Hay propietarios dos tipos: Personas Naturales y Personas Jurídicas. Las personas
naturales deben tener tipo de documento, el número del documento, nombres y apellidos; los
otros tienen el NIT y la razón social. Ambos deben tener dirección, teléfono y pueden tener un
correo electrónico.
Entrevistador: ¿Y las construcciones y los terrenos?
Funcionario: Las construcciones tienen el número de pisos, el área total, si la construcción es
industrial, comercial o residencial y la dirección de la construcción. Los terrenos tienen el área, el
valor comercial, si está cerca de fuentes de agua, si es un terreno rural o urbano y si tiene
construcciones en él.
Entrevistador: Entonces, ¿un predio puede tener más de un terreno?
Funcionario: No. Un predio puede tener muchas construcciones, pero sólo un terreno.
Entrevistador: ¿Qué es lo que debería poder hacer el sistema?
Funcionario: Debe poder hacer la inscripción, edición y eliminación de un predio, se deben poder
ver, crear, modificar y eliminar sus propietarios, construcciones y su terreno si lo tiene. ¡Aahh!,
evidentemente, también se deben ver los predios que ya estén registrados.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
