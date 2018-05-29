<div class="modal fade" id="js-auth" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="auth__logo m--margin-bottom-20">
                    <img src="<?=$short_root?>assets/img/logo.png">
                </div>
                <?php
                switch (\Lemurro\Configs\SettingsGeneral::AUTH_TYPE) {
                    case 'email':
                        $get_form_data = [
                            'input_label' => 'Электронная почта',
                            'input_class' => '',
                        ];

                        $check_form_data = [
                            'input_label'    => 'Код из письма',
                            'repeat_message' => 'Не пришло письмо?',
                        ];
                        break;

                    case 'phone':
                        $get_form_data = [
                            'input_label' => 'Номер телефона',
                            'input_class' => 'js-phone-mask',
                        ];

                        $check_form_data = [
                            'input_label'    => 'Код из СМС',
                            'repeat_message' => 'Не пришло смс?',
                        ];
                        break;
                }
                ?>
                <form id="js-auth__get-form" class="m-form">
                    <div class="form-group m-form__group">
                        <label><?=$get_form_data['input_label']?></label>
                        <input type="text" name="auth_id" class="form-control m-input <?=$get_form_data['input_class']?>">
                    </div>
                    <div class="form-group m-form__group text-center">
                        <button type="button" class="btn btn-primary" onclick="auth.getCode()">
                            Получить код
                        </button>
                    </div>
                </form>
                <form id="js-auth__check-form" class="m-form">
                    <div class="form-group m-form__group">
                        <label><?=$check_form_data['input_label']?></label>
                        <input type="text" name="auth_code" class="form-control m-input js-code-mask">
                    </div>
                    <div class="form-group m-form__group text-center">
                        <button type="button" class="btn btn-primary" onclick="auth.checkCode()">
                            Отправить код
                        </button>
                    </div>
                    <div class="form-group m-form__group js-timer">
                        <small><?=$check_form_data['repeat_message']?> Повторно запросить код можно через
                            <span class="js-timer__count">60</span> сек.
                        </small>
                    </div>
                    <div class="form-group m-form__group text-center js-resend">
                        <button type="button" class="btn btn-primary" onclick="auth.getCode()">
                            Запросить код ещё раз
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>