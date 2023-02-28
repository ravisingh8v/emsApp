import { ComponentRef, Injectable } from '@angular/core';
import { ComponentType, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  public overlayRef!: OverlayRef;

  constructor(private overlay: Overlay) {}

  open<T>(component: ComponentType<T>) {
    this.overlayRef = this.overlay.create({
      panelClass: 'overlay-panel',
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerVertically()
        .centerHorizontally(),
    });

    const portal = new ComponentPortal(component);
    const comopnentRef = this.overlayRef.attach(portal);

    this.overlayRef.backdropClick().subscribe((res) => {});

    return comopnentRef;
  }
}
