# Proyecto Car Shop

## Descripción 

Este proyecto es una aplicación de gestión de órdenes de trabajo para 
talleres automotrices. Utiliza React.js y Material-UI para la interfaz de usuario, 
y React Router para la navegación. Permite ingresar datos de clientes, vehículos y servicios, 
generando órdenes de trabajo con fechas estimadas de entrega.


## Construcción de paquetes

Ejecute el proyecto siguiendo los siguientes pasos:


1. Clone el repositorio del proyecto:
```
git clone https://github.com/oscarcaranqui/project_final
```

2. Ir al directorio raiz:

```
cd project_final
```

3. Instalar dependecias:
```
npm install
```

4. Ejecutar el projecto:

```
npm start
```

URL de la aplicación [http://localhost:3000](http://localhost:3000)

## Despliegue en AWS
1. Construccion de archivos de react
```
npm run build
```

2. Damos click en create bucket
![img.png](images_aws/img.png)

3. Agregar un nombre único del bucket
![img.png](images_aws/img2.png)
4. Dar permisos públicos al bucket y aceptamos la advetencia que nos da AWS
![img.png](images_aws/img3.png)
5. Finalmente creamnos el bucket
![img.png](images_aws/img4.png)
6. Ingresamos al bucket creado
![img.png](images_aws/img5.png)
7. cargamos todos los archivos build generado de nuestro proyecto y le damos upload
![img.png](images_aws/img7.png)
8. Agregamos una politica al bucket
![img_1.png](images_aws/img_9.png)
9. Luego damos click en save changes
![img.png](images_aws/img_10.png)
10. Agregamos una política de seguridad para compartir recursos
![img.png](images_aws/img_11.png)
11. habilitamos el Static website hosting
![img.png](images_aws/img_12.png)
12. El bucket debería verse de la siguiente manera, con acceso publico
![img.png](images_aws/img_13.png)

- Enlace al proyecto en AWS: [oscarcaranqui](http://oscarcaranqui.s3-website-us-east-1.amazonaws.com)