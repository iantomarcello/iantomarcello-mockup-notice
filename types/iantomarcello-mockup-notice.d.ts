import { LitElement, PropertyValues } from 'lit';
import './circular-text';
/**
 * A dialog for showing description that this is a mockup for Ian Yong's work.
 */
export declare class ImMockupNotice extends LitElement {
    label: string;
    href: string;
    dialog: HTMLDialogElement;
    static styles: import("lit").CSSResult[];
    init(): void;
    showModal(): void;
    close(): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iantomarcello-mockup-notice': ImMockupNotice;
    }
}
