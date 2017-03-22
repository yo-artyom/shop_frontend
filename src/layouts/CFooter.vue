<template>
	<footer id="footer">
	   <div class="container-fluid">
	      <div class="row">
	         <div class="col-sm-6 col-md-3">
	            <div class="footer-nav">
	               <h3>Информация</h3>
	               <ul>
	                  <li><router-link to="/about">О нас</router-link></li>
	                  <li><router-link to="/delivery">Информация о доставке</router-link></li>
	               </ul>
	            </div>
	         </div>
	         <div class="col-sm-6 col-md-3">
	            <div class="footer-nav">
	               <h3>Служба поддержки</h3>
	               <ul>
	                  <li><router-link to="/contacts">Связаться с нами</router-link></li>
	                  <li><router-link to="/product_return">Возврат товара</router-link></li>
	                  <li><router-link to="#">Карта сайта</router-link></li>
	               </ul>
	            </div>
	         </div>
	         <div class="col-sm-6 col-md-3">
	            <div class="footer-nav">
	               <h3>Дополнительно</h3>
	               <ul>
	                  <li><router-link to="/manufacturers">Производители</router-link></li>
	                  <li><router-link to='#'>Подарочные сертификаты</router-link></li>
	                  <li><router-link to='#'>Акции</router-link></li>
	               </ul>
	            </div>
	         </div>
	         <div class="col-sm-6 col-md-3">
	            <div class="footer-nav">
	               <h3>Личный кабинет</h3>
	               <ul>
	                  <li><router-link to='#'>Личный кабинет</router-link></li>
	                  <li><router-link to='#'>История заказов</router-link></li>
	               </ul>
	            </div>
	         </div>
	      </div>
	   </div>
	   <div class="footer-bottom">
	      <div class="content-wrapper">
	         <div class="footer-bottom-copy"><router-link to="http://vk.com/edmkeflskengeosjf"><strong> Разработка </strong> - Артём Малышев</router-link></div>
	      </div>
	   </div>
	</footer>
</template>

<script>
export default {
	name: 'c-footer'
}
</script>

<style>
</style>
