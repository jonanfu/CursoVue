<template>
    <div class="gallery container mt-4">
        <single-image :selectedImage="selectedImage"></single-image>
        <image-list v-bind:images="images" @emitImage="showImage"></image-list>    
    </div>     
    
</template>

<script>
    import ImageList from './ImageList'
    import SingleImage from './SingleImage'


export default {
    name: 'galeria',
    components: {SingleImage, ImageList},
    data(){
        return {
            selectedImage: '',
            images: [
                {id: 1, title: 'Primera Imagen', description: 'Descripción Primera Imagen', thumbnail: 'http://pypl.github.io/PYPL/All.png', imageLink: 'http://pypl.github.io/PYPL/All.png'},
                {id: 2, title: 'Segunda Imagen', description: 'Descripción Segunda Imagen', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EzV95yNvP3Y8YTM93jnft0M7rdpj2q4K6lZa_CpgNVSZM6eN', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EzV95yNvP3Y8YTM93jnft0M7rdpj2q4K6lZa_CpgNVSZM6eN'},
                {id: 3, title: 'Tercera Imagen', description: 'Descripción Tercera Imagen', thumbnail: 'https://www.clasesdeinformaticaweb.com/wp-content/uploads/2018/10/c-sharp.gif', imageLink: 'https://www.clasesdeinformaticaweb.com/wp-content/uploads/2018/10/c-sharp.gif'},
                {id: 4, title: 'Cuarta Imagen', description: 'Descripción Cuarta Imagen', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUE3NUvo3lNqjv_llGv5N6LaOgy8rNa_EqKZI5M5ytB8HzUdIkQ',imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUE3NUvo3lNqjv_llGv5N6LaOgy8rNa_EqKZI5M5ytB8HzUdIkQ'},
                {id: 5, title: 'Quinta Imagen', description: 'Descripción Quinta Imagen', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrDrirB14Q4-gvlZuhEjQwQQ13nF8NZu3VFnN_3-i6VQge2-X', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrDrirB14Q4-gvlZuhEjQwQQ13nF8NZu3VFnN_3-i6VQge2-X'},
                {id: 6, title: 'Sexta Imagen', description: 'Descripción Sexta Imagen', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSDCRwkkZh5vlwiW_ssmqT04px6Ne2TfjTYHeRjLIo5EH4ClP', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSDCRwkkZh5vlwiW_ssmqT04px6Ne2TfjTYHeRjLIo5EH4ClP'},
                {id: 7, title: 'Septimaa Imagen', description: 'Descripción Septima Imagen', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkDTcPkPL_7__nsYBn0mVaaPbIHoLAy9J4odKW77urw_eov1TDQ', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkDTcPkPL_7__nsYBn0mVaaPbIHoLAy9J4odKW77urw_eov1TDQ'},
                {id: 8, title: 'Octava Imagen', description: 'Descripción Octava Imagen', thumbnail: 'https://2.bp.blogspot.com/-pMOmTjgJ5JQ/WMQD-IEwFdI/AAAAAAAAAHQ/7fgzoB5qJV8gKbdvct3yxW56TGF4F-lvgCLcB/s1600/2.4.4.png', imageLink: 'https://2.bp.blogspot.com/-pMOmTjgJ5JQ/WMQD-IEwFdI/AAAAAAAAAHQ/7fgzoB5qJV8gKbdvct3yxW56TGF4F-lvgCLcB/s1600/2.4.4.png'}
            ]
        }
    }, 
        methods:{
            showImage : function(image){
                this.selectedImage = image
            }
        }
    }

</script>

<style>
  img {
    -webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    margin-bottom:20px;
  }

  img:hover {
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  }
</style>

