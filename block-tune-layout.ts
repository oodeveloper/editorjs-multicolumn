/**
 * @class MoveDownTune
 * @classdesc Editor's default tune - Moves down highlighted block
 *
 * @copyright <CodeX Team> 2018
 */

import $ from '../dom';
import { API, BlockTune } from '../../../types';

/**
 *
 */
export default class LayoutTune implements BlockTune {
  /**
   * Property that contains Editor.js API methods
   *
   * @see {@link docs/api.md}
   */
  private readonly api: API;
  private data;
  private wrapper;
  private sidebar;

  /**
   * Styles
   *
   * @type {{wrapper: string}}
   */
  private CSS = {
    button: 'ce-settings__button',
    wrapper: 'ce-tune-layout',
    sidebar: 'cdx-settings-sidebar',
    animation: 'wobble',
  };

  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api, settings }) {
    this.api = api;
  	this.data = {colWidth:12,pl:0,pr:0,pt:0,pb:0};
    this.wrapper = undefined;
    this.sidebar = undefined;
  }

  /**
   * Return 'move down' button
   *
   * @returns {HTMLElement}
   */
  public render(): HTMLElement {
    const layoutWrapper = $.make('div', this.CSS.wrapper, {});
    const decreaseWidthButton = $.make('button', this.CSS.button, {});
    const increaseWidthButton = $.make('button', this.CSS.button, {});
    const paddingButton = $.make('button', this.CSS.button, {});

    layoutWrapper.appendChild(decreaseWidthButton);
    layoutWrapper.appendChild(increaseWidthButton);
    layoutWrapper.appendChild(paddingButton);

    decreaseWidthButton.appendChild($.svg('decrease-width', 15, 15));
    this.api.listeners.on(
      decreaseWidthButton,
      'click',
      (event) => this.decreaseWidth(event as MouseEvent, decreaseWidthButton),
      false
    );

    increaseWidthButton.appendChild($.svg('increase-width', 15, 15));
    this.api.listeners.on(
      increaseWidthButton,
      'click',
      (event) => this.increaseWidth(event as MouseEvent, increaseWidthButton),
      false
    );


    paddingButton.appendChild($.svg('padding', 15, 15));
    this.api.listeners.on(
      paddingButton,
      'click',
      (event) => this.showPadding(event as MouseEvent, paddingButton),
      false
    );

    /**
     * Enable tooltip module on button
     */
     this.wrapper = layoutWrapper;
    return layoutWrapper;
  }


  /**
   * Handle clicks on 'move down' button
   *
   * @param {MouseEvent} event - click event
   * @param {HTMLElement} button - clicked button
   */
  public decreaseWidth(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

    if(currentBlockIndex < 0){
      return;
    }

    const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
    if (!currentBlock){
      return;
    }

    const currentBlockElement = currentBlock.holder;

    // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'col-12';
    const colClass = new RegExp(/\bcol-.+?\b/, 'g');
    if (currentBlockElement.className.match(colClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(colClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let width = parseInt(parts[1]);
        if(width >= 2){
          currentBlockElement.classList.remove('col-'+width);
          width = width - 1;
          currentBlockElement.classList.add('col-'+width);
        }
    }
  }

  public increaseWidth(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

	  if(currentBlockIndex < 0){
		  return;
	  }

	  const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
	  if (!currentBlock){
		  return;
		}

	  const currentBlockElement = currentBlock.holder;

	  // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'col-12';
    const colClass = new RegExp(/\bcol-.+?\b/, 'g');
    if (currentBlockElement.className.match(colClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(colClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let width = parseInt(parts[1]);
        if(width <= 11){
    			currentBlockElement.classList.remove('col-'+width);
    			width = width + 1;
          currentBlockElement.classList.add('col-'+width);
  		  }
    }
  }

  public showPadding(event: MouseEvent, button: HTMLElement): void {
    if(button.classList.contains('cdx-settings-button--active')){
			this.sidebar.remove();
			button.classList.remove('cdx-settings-button--active');
	  } else {
			button.classList.add('cdx-settings-button--active');
      const sidebarWrapper = $.make('div', this.CSS.sidebar, {});
      const paddingLeftCaption = $.make('button', [this.CSS.button,'disabled'], {});
      paddingLeftCaption.appendChild($.svg('arrow-left', 10, 10));

      const paddingRightCaption = $.make('button', [this.CSS.button,'disabled'], {});
      paddingRightCaption.appendChild($.svg('arrow-right', 10, 10));

      const paddingTopCaption = $.make('button', [this.CSS.button,'disabled'], {});
      paddingTopCaption.appendChild($.svg('arrow-up', 10, 10));

      const paddingBottomCaption = $.make('button', [this.CSS.button,'disabled'], {});
      paddingBottomCaption.appendChild($.svg('arrow-down', 10, 10));

      const increasePaddingLeft = $.make('button', this.CSS.button, {});
      const decreasePaddingLeft = $.make('button', this.CSS.button, {});
      const increasePaddingRight = $.make('button', this.CSS.button, {});
      const decreasePaddingRight = $.make('button', this.CSS.button, {});
      const increasePaddingTop = $.make('button', this.CSS.button, {});
      const decreasePaddingTop = $.make('button', this.CSS.button, {});
      const increasePaddingBottom = $.make('button', this.CSS.button, {});
      const decreasePaddingBottom = $.make('button', this.CSS.button, {});
      this.sidebar = sidebarWrapper;



      // Left Padding
      sidebarWrapper.appendChild(paddingLeftCaption);

      increasePaddingLeft.appendChild($.svg('plus', 15, 15));
      this.api.listeners.on(
        increasePaddingLeft,
        'click',
        (event) => this.increasePaddingLeft(event as MouseEvent, increasePaddingLeft),
        false
      );
      sidebarWrapper.appendChild(increasePaddingLeft);

      decreasePaddingLeft.appendChild($.svg('minus', 15, 15));
      this.api.listeners.on(
        decreasePaddingLeft,
        'click',
        (event) => this.decreasePaddingLeft(event as MouseEvent, decreasePaddingLeft),
        false
      );
      sidebarWrapper.appendChild(decreasePaddingLeft);

      // Right Padding
      sidebarWrapper.appendChild(paddingRightCaption);
      increasePaddingRight.appendChild($.svg('plus', 15, 15));
      this.api.listeners.on(
        increasePaddingRight,
        'click',
        (event) => this.increasePaddingRight(event as MouseEvent, increasePaddingRight),
        false
      );
      sidebarWrapper.appendChild(increasePaddingRight);

      decreasePaddingRight.appendChild($.svg('minus', 15, 15));
      this.api.listeners.on(
        decreasePaddingRight,
        'click',
        (event) => this.decreasePaddingRight(event as MouseEvent, decreasePaddingRight),
        false
      );
      sidebarWrapper.appendChild(decreasePaddingRight);

      // Top Padding
      sidebarWrapper.appendChild(paddingTopCaption);
      increasePaddingTop.appendChild($.svg('plus', 15, 15));
      this.api.listeners.on(
        increasePaddingTop,
        'click',
        (event) => this.increasePaddingTop(event as MouseEvent, increasePaddingTop),
        false
      );
      sidebarWrapper.appendChild(increasePaddingTop);

      decreasePaddingTop.appendChild($.svg('minus', 15, 15));
      this.api.listeners.on(
        decreasePaddingTop,
        'click',
        (event) => this.decreasePaddingTop(event as MouseEvent, decreasePaddingTop),
        false
      );
      sidebarWrapper.appendChild(decreasePaddingTop);

      // Bottom Padding
      sidebarWrapper.appendChild(paddingBottomCaption);
      increasePaddingBottom.appendChild($.svg('plus', 15, 15));
      this.api.listeners.on(
        increasePaddingBottom,
        'click',
        (event) => this.increasePaddingBottom(event as MouseEvent, increasePaddingBottom),
        false
      );
      sidebarWrapper.appendChild(increasePaddingBottom);

      decreasePaddingBottom.appendChild($.svg('minus', 15, 15));
      this.api.listeners.on(
        decreasePaddingBottom,
        'click',
        (event) => this.decreasePaddingBottom(event as MouseEvent, decreasePaddingBottom),
        false
      );
      sidebarWrapper.appendChild(decreasePaddingBottom);







      this.wrapper.appendChild(sidebarWrapper);
    }

  }

  public increasePaddingLeft(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

	  if(currentBlockIndex < 0){
		  return;
	  }

	  const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
	  if (!currentBlock){
		  return;
		}

	  const currentBlockElement = currentBlock.holder;

	  // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'pl-0';
    const paddingClass = new RegExp(/\pl-.+?\b/, 'g');
    if (currentBlockElement.className.match(paddingClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(paddingClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let padding = parseInt(parts[1]);
        if(padding <= 4){
    			currentBlockElement.classList.remove('pl-'+padding);
    			padding = padding + 1;
          currentBlockElement.classList.add('pl-'+padding);
  		  }
    }

  }

  public decreasePaddingLeft(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

	  if(currentBlockIndex < 0){
		  return;
	  }

	  const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
	  if (!currentBlock){
		  return;
		}

	  const currentBlockElement = currentBlock.holder;

	  // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'pl-0';
    const paddingClass = new RegExp(/\pl-.+?\b/, 'g');
    if (currentBlockElement.className.match(paddingClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(paddingClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let padding = parseInt(parts[1]);
        if(padding >= 1){
    			currentBlockElement.classList.remove('pl-'+padding);
    			padding = padding - 1;
          currentBlockElement.classList.add('pl-'+padding);
  		  }
    }

  }

  public increasePaddingRight(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

	  if(currentBlockIndex < 0){
		  return;
	  }

	  const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
	  if (!currentBlock){
		  return;
		}

	  const currentBlockElement = currentBlock.holder;

	  // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'pr-0';
    const paddingClass = new RegExp(/\pr-.+?\b/, 'g');
    if (currentBlockElement.className.match(paddingClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(paddingClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let padding = parseInt(parts[1]);
        if(padding <= 4){
    			currentBlockElement.classList.remove('pr-'+padding);
    			padding = padding + 1;
          currentBlockElement.classList.add('pr-'+padding);
  		  }
    }


  }

  public decreasePaddingRight(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

	  if(currentBlockIndex < 0){
		  return;
	  }

	  const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
	  if (!currentBlock){
		  return;
		}

	  const currentBlockElement = currentBlock.holder;

	  // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'pr-0';
    const paddingClass = new RegExp(/\pr-.+?\b/, 'g');
    if (currentBlockElement.className.match(paddingClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(paddingClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let padding = parseInt(parts[1]);
        if(padding >= 1){
    			currentBlockElement.classList.remove('pr-'+padding);
    			padding = padding - 1;
          currentBlockElement.classList.add('pr-'+padding);
  		  }
    }

  }

  public increasePaddingTop(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

	  if(currentBlockIndex < 0){
		  return;
	  }

	  const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
	  if (!currentBlock){
		  return;
		}

	  const currentBlockElement = currentBlock.holder;

	  // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'pt-0';
    const paddingClass = new RegExp(/\pt-.+?\b/, 'g');
    if (currentBlockElement.className.match(paddingClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(paddingClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let padding = parseInt(parts[1]);
        if(padding <= 4){
    			currentBlockElement.classList.remove('pt-'+padding);
    			padding = padding + 1;
          currentBlockElement.classList.add('pt-'+padding);
  		  }
    }


  }

  public decreasePaddingTop(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

	  if(currentBlockIndex < 0){
		  return;
	  }

	  const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
	  if (!currentBlock){
		  return;
		}

	  const currentBlockElement = currentBlock.holder;

	  // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'pt-0';
    const paddingClass = new RegExp(/\pt-.+?\b/, 'g');
    if (currentBlockElement.className.match(paddingClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(paddingClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let padding = parseInt(parts[1]);
        if(padding >= 1){
    			currentBlockElement.classList.remove('pt-'+padding);
    			padding = padding - 1;
          currentBlockElement.classList.add('pt-'+padding);
  		  }
    }

  }

  public increasePaddingBottom(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

    if(currentBlockIndex < 0){
      return;
    }

    const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
    if (!currentBlock){
      return;
    }

    const currentBlockElement = currentBlock.holder;

    // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'pb-0';
    const paddingClass = new RegExp(/\pb-.+?\b/, 'g');
    if (currentBlockElement.className.match(paddingClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(paddingClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let padding = parseInt(parts[1]);
        if(padding <= 4){
          currentBlockElement.classList.remove('pb-'+padding);
          padding = padding + 1;
          currentBlockElement.classList.add('pb-'+padding);
        }
    }

  }

  public decreasePaddingBottom(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

	  if(currentBlockIndex < 0){
		  return;
	  }

	  const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
	  if (!currentBlock){
		  return;
		}

	  const currentBlockElement = currentBlock.holder;

	  // let block = this.api.blocks.getBlock(currentBlockElement);
    let className = 'pb-0';
    const paddingClass = new RegExp(/\pb-.+?\b/, 'g');
    if (currentBlockElement.className.match(paddingClass)) {
      currentBlockElement.classList.forEach( cn => {
        if(cn.match(paddingClass)){
          className = cn;
        }
      });
        let parts = className.split('-');
        let padding = parseInt(parts[1]);
        if(padding >= 1){
    			currentBlockElement.classList.remove('pb-'+padding);
    			padding = padding - 1;
          currentBlockElement.classList.add('pb-'+padding);
  		  }
    }
  }

}
