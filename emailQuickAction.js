import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class EmailQuickAction extends NavigationMixin(LightningElement) {
    @api recordId;
    @api invoke() {
        var pageRef = {
            type: "standard__quickAction",
            attributes: {
                apiName: "Global.SendEmail",
            },
            state: {
                recordId: this.recordId,
                defaultFieldValues: encodeDefaultFieldValues({
                    HtmlBody: "This is a test email to ensure that our messaging system is functioning correctly. The content within this message is placeholder text used for testing purposes. Should you have any questions or require further assistance, please do not hesitate to contact us.",
                    Subject: "Subject Line Placeholder",
                }),
            },
        };

        this[NavigationMixin.Navigate](pageRef);
    }
}