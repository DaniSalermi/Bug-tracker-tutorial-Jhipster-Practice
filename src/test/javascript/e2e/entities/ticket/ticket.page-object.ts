import { element, by, ElementFinder } from 'protractor';

export class TicketComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-ticket div table .btn-danger'));
  title = element.all(by.css('jhi-ticket div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class TicketUpdatePage {
  pageTitle = element(by.id('jhi-ticket-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  titleInput = element(by.id('field_title'));
  descriptionInput = element(by.id('field_description'));
  dueDateInput = element(by.id('field_dueDate'));
  doneInput = element(by.id('field_done'));

  projectSelect = element(by.id('field_project'));
  assignedToSelect = element(by.id('field_assignedTo'));
  labelSelect = element(by.id('field_label'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTitleInput(title: string): Promise<void> {
    await this.titleInput.sendKeys(title);
  }

  async getTitleInput(): Promise<string> {
    return await this.titleInput.getAttribute('value');
  }

  async setDescriptionInput(description: string): Promise<void> {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput(): Promise<string> {
    return await this.descriptionInput.getAttribute('value');
  }

  async setDueDateInput(dueDate: string): Promise<void> {
    await this.dueDateInput.sendKeys(dueDate);
  }

  async getDueDateInput(): Promise<string> {
    return await this.dueDateInput.getAttribute('value');
  }

  getDoneInput(): ElementFinder {
    return this.doneInput;
  }

  async projectSelectLastOption(): Promise<void> {
    await this.projectSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async projectSelectOption(option: string): Promise<void> {
    await this.projectSelect.sendKeys(option);
  }

  getProjectSelect(): ElementFinder {
    return this.projectSelect;
  }

  async getProjectSelectedOption(): Promise<string> {
    return await this.projectSelect.element(by.css('option:checked')).getText();
  }

  async assignedToSelectLastOption(): Promise<void> {
    await this.assignedToSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async assignedToSelectOption(option: string): Promise<void> {
    await this.assignedToSelect.sendKeys(option);
  }

  getAssignedToSelect(): ElementFinder {
    return this.assignedToSelect;
  }

  async getAssignedToSelectedOption(): Promise<string> {
    return await this.assignedToSelect.element(by.css('option:checked')).getText();
  }

  async labelSelectLastOption(): Promise<void> {
    await this.labelSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async labelSelectOption(option: string): Promise<void> {
    await this.labelSelect.sendKeys(option);
  }

  getLabelSelect(): ElementFinder {
    return this.labelSelect;
  }

  async getLabelSelectedOption(): Promise<string> {
    return await this.labelSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class TicketDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-ticket-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-ticket'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
