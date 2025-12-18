import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() label: string = 'Button';
    @Input() variant: 'primary' | 'primary-dark' | 'secondary' | 'neutral' | 'outline-white' | 'white' | 'outline-red-fill' | 'outline-red-ghost' = 'primary';
    @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
    @Input() fullWidth: boolean = false;
    @Input() type: 'button' | 'submit' | 'reset' = 'button';

    get buttonClasses(): string {
        return `btn btn-${this.variant} btn-${this.size} ${this.fullWidth ? 'btn-full' : ''}`;
    }
}