<form id="js-guide-form" data-id="0">
    <h5 class="js-title m--margin-bottom-20">
        Добавление записи
    </h5>
    <div class="form-group m-form__group">
        <label>Название</label>
        <input type="text" class="form-control m-input" name="name">
    </div>
    <div>
        <button type="button" id="js-guide__button-insert" class="btn btn-primary m-btn--icon" onclick="guideExample.insert()">
                    <span>
                        <i class="fas fa-plus"></i>
                        <span>Добавить</span>
                    </span>
        </button>
        <button type="button" id="js-guide__button-save" class="btn btn-success m-btn--icon" onclick="guideExample.save()">
                    <span>
                        <i class="fas fa-save"></i>
                        <span>Сохранить</span>
                    </span>
        </button>
        &nbsp;
        <button type="button" class="btn btn-secondary" onclick="tabs.tabInsertEdit('hide')">
            Закрыть
        </button>
    </div>
</form>