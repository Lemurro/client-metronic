        </div>
    </div>
    <!-- end::Body -->
    <!-- begin::Footer -->
    <footer class="m-grid__item m-footer ">
        <div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
            <div class="m-footer__wrapper">
                <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                    <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                        <span class="m-footer__copyright">
                            <?php
                            $begin_year = 2018;
                            $copy_date = (date('Y') == $begin_year ? $begin_year : $begin_year . '-' . date('Y'));
                            ?>
                            <?=$copy_date?> &copy; <a href="https://bestion.ru" class="m-link">Лучшее решение</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- end::Footer -->
</div>
<!-- end:: Page -->

<!-- begin::Scroll Top -->
<div class="m-scroll-top m-scroll-top--skin-top" data-toggle="m-scroll-top" data-scroll-offset="500" data-scroll-speed="300">
    <i class="la la-arrow-up"></i>
</div>
<!-- end::Scroll Top -->
<?=$view->render('Views/block_all_foot.php')?>